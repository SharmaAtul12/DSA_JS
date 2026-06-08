function mergeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;

  /**
   * a and b are two intervals being compared.
    a[0] is the start time of the first interval.
    b[0] is the start time of the second interval.
    Negative value → a comes first.
    Positive value → b comes first.
    Zero → both are equal.
    This sorts all intervals in ascending order of their start times, making it easy to merge overlapping intervals in a single pass.
   */
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = result[result.length - 1];

    if (current[0] <= lastMerged[1]) {
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      result.push(current);
    }
  }

  return result;
}
