// @flow
import moment from 'moment';
const offset = 55;
const magins = 2;

function buildEvent(column, left, width, dayStart) {
  const startTime = moment(column.start);
  const endTime = column.end
    ? moment(column.end)
    : startTime.clone().add(1, 'hour');
  const dayStartTime = startTime
    .clone()
    .hour(dayStart)
    .minute(0);
  const diffHours = startTime.diff(dayStartTime, 'hours', true);

  column.top = diffHours * offset;
  column.height = endTime.diff(startTime, 'hours', true) * offset - magins;
  column.width = width;
  column.left = left;
  return column;
}

function collision(a, b) {
  return a.end > b.start && a.start < b.end;
}

function expand(ev, column, columns) {
  var colSpan = 1;

  for (var i = column + 1; i < columns.length; i++) {
    var col = columns[i];
    for (var j = 0; j < col.length; j++) {
      var ev1 = col[j];
      if (collision(ev, ev1)) {
        return colSpan;
      }
    }
    colSpan++;
  }

  return colSpan;
}

function pack(columns, width, calculatedEvents, dayStart) {
  var colLength = columns.length;

  for (var i = 0; i < colLength; i++) {
    var col = columns[i];
    for (var j = 0; j < col.length; j++) {
      var colSpan = expand(col[j], i, columns);
      var L = (i / colLength) * width;
      var W = (width * colSpan) / colLength - magins;

      calculatedEvents.push(buildEvent(col[j], L, W, dayStart));
    }
  }
}

function populateEvents(events, screenWidth, dayStart) {
  let lastEnd;
  let columns;
  let self = this;
  let calculatedEvents = [];

  // events = events.map((ev, index) => ({ ...ev, index: index }))
  // .sort(function(a, b) {
  //     if (a.start < b.start) return -1;
  //     if (a.start > b.start) return 1;
  //     if (a.end < b.end) return -1;
  //     if (a.end > b.end) return 1;
  //     return 0;
  //   });

  // {
  //   date: '2020-07-29T10:00:00.000Z',
  //   duration: 2,
  //   title: 'Como baixar Mineraft pirata',
  // },

  // {
  //   start: '2020-07-27 09:00:00',
  //   end: '2020-07-27 10:00:00',
  //   title: 'Abertura',
  // },
  events = events.map((ev, index) =>({
      start: moment(ev.date).utc().format("YYYY-MM-DD HH:mm:ss").toString(),
      end: moment(ev.date).add(ev.duration, 'hours').utc().format("YYYY-MM-DD HH:mm:ss").toString(),
      title: ev.title,
      index: index
    })).sort(function(a, b) {
      if (a.start < b.start) return -1;
      if (a.start > b.start) return 1;
      if (a.end < b.end) return -1;
      if (a.end > b.end) return 1;
      return 0;
    });
  
  columns = [];
  lastEnd = null;

  events.forEach(function(ev, index) {
    if (lastEnd !== null && ev.start >= lastEnd) {
      pack(columns, screenWidth, calculatedEvents, dayStart);
      columns = [];
      lastEnd = null;
    }

    var placed = false;
    for (var i = 0; i < columns.length; i++) {
      var col = columns[i];
      if (!collision(col[col.length - 1], ev)) {
        col.push(ev);
        placed = true;
        break;
      }
    }

    if (!placed) {
      columns.push([ev]);
    }

    if (lastEnd === null || ev.end > lastEnd) {
      lastEnd = ev.end;
    }
  });

  if (columns.length > 0) {
    pack(columns, screenWidth, calculatedEvents, dayStart);
  }
  return calculatedEvents;
}

export default populateEvents;
