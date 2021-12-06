export default class ParisEventsAPI {
  constructor() {
    this.urlAPI =
      "https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-";
  }

  search(q, sort) {
    return fetch(`${this.urlAPI}&q=${q}&sort=${sort}&rows=15`)
      .then((response) => response.json())
      .then((data) => {
        return data.records.map((record) => {
          return {
            title: record.fields.title,
            cover: record.fields.cover_url,
            cover_alt: record.fields.cover_alt,
          };
        });
      });
  }
}
