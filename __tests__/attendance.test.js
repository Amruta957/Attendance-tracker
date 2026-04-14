function calcPercent(attended, total) {
  if (total === 0) return 0;
  return parseFloat(((attended / total) * 100).toFixed(1));
}

function isLowAttendance(percent) {
  return percent < 75;
}

test('calculates attendance percentage correctly', () => {
  expect(calcPercent(30, 40)).toBe(75.0);
  expect(calcPercent(20, 40)).toBe(50.0);
  expect(calcPercent(38, 40)).toBe(95.0);
});

test('flags low attendance below 75%', () => {
  expect(isLowAttendance(74.9)).toBe(true);
  expect(isLowAttendance(75.0)).toBe(false);
  expect(isLowAttendance(80.0)).toBe(false);
});
