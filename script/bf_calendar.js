var CLIENT_ID =
  "1078858996969-6o3s6fiirgpj22iajjm4ikf74rgq4vcj.apps.googleusercontent.com";
var API_KEY = "AIzaSyBcjU3EFsKToi4RPCKHlMJuTe5Ml47fuWQ";
var DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
];
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

var convertDay = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
  6: "SAT"
};

var convertMonth = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec"
};

function addZero(day) {
  if (day < 10) {
    return "0" + day.toString();
  }
  return day;
}

function hourAdjust(hour) {
if (hour > 12) {
    return hour - 12;
  }
  return hour;
}

function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}

function initClient() {
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    })
    .then(
      function() {
        console.log("Loaded Google");
        listUpcomingEvents();
      },
      function(error) {
        console.log(JSON.stringify(error, null, 2));
      }
    );
}

function listUpcomingEvents() {
  gapi.client.calendar.events
    .list({
      calendarId: "gchkvk5dlrqn58pi0ct5l5k27k@group.calendar.google.com",
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: "startTime"
    })
    .then(function(response) {
      var events = response.result.items;

      if (events.length > 0) {
        for (i = 0; i < events.length; i++) {
          var event = events[i];
          var when = event.start.dateTime;
          if (!when) {
            when = event.start.date;
          }
          console.log(event.location);
          var eventDate = new Date(event.start.dateTime);

          var eventTitle =
          addZero(hourAdjust(eventDate.getHours())).toString() +
            ":" +
            addZero(eventDate.getMinutes()).toString() + " "+
            event.summary.trim();

          addEvent(
            convertDay[eventDate.getDay()],
            convertMonth[eventDate.getMonth()],
            addZero(eventDate.getDate()),
            eventTitle,
            event.description.trim()
          );
        }
      }
    });
}


function addEvent(day, month, num, title, desc) {
  var event = document.createElement("div");
  event.className = "event";

  var eventDate = document.createElement("div");
  eventDate.className = "event_date";

  eventDate.appendChild(document.createElement("hr"));

  var eventWeekday = document.createElement("h2");
  eventWeekday.className = "event_weekday";
  eventWeekday.innerText = day;
  eventDate.appendChild(eventWeekday);

  var eventMonth = document.createElement("h2");
  eventMonth.className = "event_month";
  eventMonth.innerText = month;
  eventDate.appendChild(eventMonth);

  var eventDay = document.createElement("h2");
  eventDay.className = "event_numerical_day";
  eventDay.innerText = num;
  eventDate.appendChild(eventDay);

  event.appendChild(eventDate);

  var eventTitle = document.createElement("h1");
  eventTitle.className = "event_title";
  eventTitle.innerText = title;

  event.appendChild(eventTitle);

  var eventDesc = document.createElement("p");
  eventDesc.className = "event_description";
  eventDesc.innerText = desc;

  event.appendChild(eventDesc);

  document.getElementsByClassName("upcoming_events")[0].appendChild(event);
}
