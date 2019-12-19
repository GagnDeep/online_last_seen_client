import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function GetData(url) {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then(res => setData(res.data))
      .catch(err => setErr("Failed Reaching the server"));
  }, []);

  return [data, err];
}

function formatData(data) {
  if (!data) return [[], null];

  let keys = Object.keys(data);
  data = keys
    .map(key => {
      let { online, offline } = data[key];
      return {
        online: moment(online).utcOffset("+05:30"),
        offline: moment(offline).utcOffset("+05:30"),
        key
      };
    })
    .reverse();
  const lastSeen = data[0].offline.from(moment());

  data = data.map(({ online, offline, ...remainingItems }, i, arr) => ({
    ...remainingItems,
    online: online.format("h:mm A"),
    offline: offline.format("h:mm A"),
    onlineDuration: moment.duration(offline.diff(online)).humanize(),
    lastOnline: arr[i + 1]
      ? moment.duration(arr[i + 1].online.diff(online)).humanize()
      : null,
    expectation: 0
  }));

  return [data, lastSeen];
}

export { formatData, GetData };
