const sortRecords = async records => {
  const sortedRecords = await records.sort((a, b) => {
    if (a.time.minutes < b.time.minutes) return -1;
    if (a.time.minutes > b.time.minutes) return 1;

    if (a.time.seconds < b.time.seconds) return -1;
    if (a.time.seconds > b.time.seconds) return 1;

    if (a.time.miliSeconds < b.time.miliSeconds) return -1;
    if (a.time.miliSeconds > b.time.miliSeconds) return 1;

    return 0;
  });

  return await sortedRecords;
};

exports.sortRecords = sortRecords;
