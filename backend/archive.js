applicants = [
  {
    id: "A",
    percentile: 100,
    prefs: [
      { dsp: "CSE", waiting: 1e9 },
      { dsp: "CCE", waiting: 1e9 },
      { dsp: "ECE", waiting: 1e9 },
    ],
    status: -1,
    on_hold: false,
  },
  {
    id: "B",
    percentile: 90,
    prefs: [
      { dsp: "CSE", waiting: 1e9 },
      { dsp: "ECE", waiting: 1e9 },
      { dsp: "ME", waiting: 1e9 },
    ],
    status: -1,
    on_hold: false,
  },
  {
    id: "C",
    percentile: 80,
    prefs: [
      { dsp: "CCE", waiting: 1e9 },
      { dsp: "CSE", waiting: 1e9 },
      { dsp: "ME", waiting: 1e9 },
    ],
    status: -1,
    on_hold: false,
  },
  {
    id: "D",
    percentile: 70,
    prefs: [
      { dsp: "CCE", waiting: 1e9 },
      { dsp: "ME", waiting: 1e9 },
      { dsp: "CSE", waiting: 1e9 },
    ],
    status: -1,
    on_hold: false,
  },
  {
    id: "E",
    percentile: 60,
    prefs: [
      { dsp: "CSE", waiting: 1e9 },
      { dsp: "CCE", waiting: 1e9 },
      { dsp: "ME", waiting: 1e9 },
    ],
    status: -1,
    on_hold: false,
  },
  {
    id: "F",
    percentile: 50,
    prefs: [
      { dsp: "ECE", waiting: 1e9 },
      { dsp: "CSE", waiting: 1e9 },
      { dsp: "ME", waiting: 1e9 },
    ],
    status: -1,
    on_hold: false,
  },
  {
    id: "G",
    percentile: 40,
    prefs: [
      { dsp: "CSE", waiting: 1e9 },
      { dsp: "ME", waiting: 1e9 },
      { dsp: "ECE", waiting: 1e9 },
    ],
    status: -1,
    on_hold: false,
  },
  {
    id: "H",
    percentile: 30,
    prefs: [
      { dsp: "ECE", waiting: 1e9 },
      { dsp: "CCE", waiting: 1e9 },
      { dsp: "CSE", waiting: 1e9 },
    ],
    status: -1,
    on_hold: false,
  },
  {
    id: "I",
    percentile: 20,
    prefs: [
      { dsp: "CCE", waiting: 1e9 },
      { dsp: "CSE", waiting: 1e9 },
      { dsp: "ECE", waiting: 1e9 },
    ],
    status: -1,
    on_hold: false,
  },
  {
    id: "J",
    percentile: 10,
    prefs: [
      { dsp: "CSE", waiting: 1e9 },
      { dsp: "ME", waiting: 1e9 },
      { dsp: "ECE", waiting: 1e9 },
    ],
    status: -1,
    on_hold: false,
  },
];

branches = [
  {
    id: "CSE",
    seats: 2,
    status: 1,
    wl_no: 1,
  },
  {
    id: "CCE",
    seats: 1,
    status: 2,
    wl_no: 1,
  },
  {
    id: "ECE",
    seats: 1,
    status: 3,
    wl_no: 1,
  },
  {
    id: "ME",
    seats: 3,
    status: 4,
    wl_no: 1,
  },
  {
    id: "DCS",
    seats: 3,
    status: 5,
    wl_no: 1,
  },
  {
    id: "DEC",
    seats: 3,
    status: 6,
    wl_no: 1,
  },
];

const prom = new Promise((resolve, reject) => {
  const results = pool.query(
    "SELECT UNNEST(prefs) FROM applicants WHERE id = 1;"
  );
  resolve(results);
});

prom.then((data) => console.log(data.rows[1].unnest));
