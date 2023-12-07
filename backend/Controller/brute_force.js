export const brute_force = (id, mains_rank, prefs, version, on_hold) => {
    let text = "INSERT INTO applicants(id, percentile, status, on_hold) VALUES ($1, $2, $3, $4)";
    let values = [id, mains_rank];
    if (prefs.length >= 1) {
      text =
        "INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( $1, $2, ARRAY [($3, $4)]:: pref[], ($5), $6)";
      values = [...values, prefs[0].dsp, prefs[0].waiting];
    }
    if (prefs.length >= 2) {
      text =
        "INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( $1, $2, ARRAY [($3,$4),($5,$6)]:: pref[], ($7), $8)";
      values = [...values, prefs[1].dsp, prefs[1].waiting];
    }
    if (prefs.length >= 3) {
      text =
        "INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( $1, $2, ARRAY [($3,$4),($5,$6),($7,$8)]:: pref[], ($9), $10)";
      values = [...values, prefs[2].dsp, prefs[2].waiting];
    }
    if (prefs.length >= 4) {
      text =
        "INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( $1, $2, ARRAY [($3,$4),($5,$6),($7,$8),($9,$10)]:: pref[], ($11), $12)";
      values = [...values, prefs[3].dsp, prefs[3].waiting];
    }
    if (prefs.length >= 5) {
      text =
        "INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( $1, $2, ARRAY [($3,$4),($5,$6),($7,$8),($9,$10),($11,$12)]:: pref[], ($13), $14)";
      values = [...values, prefs[4].dsp, prefs[4].waiting];
    }
    if (prefs.length >= 6) {
      text =
        "INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( $1, $2, ARRAY [($3,$4),($5,$6),($7,$8),($9,$10),($11,$12),($13,$14)]:: pref[], ($15), $16)";
      values = [...values, prefs[5].dsp, prefs[5].waiting];
    }
    values = [...values, version, on_hold]
    return { text, values };
  };