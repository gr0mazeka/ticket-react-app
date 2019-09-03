export default class TicketService {
  // _apiBase = "http://localhost/ticket-app/ajax/ticket.php";
  _apiBase = 'http://localhost:3000/ticket_module.php';

  getResource = (act) => {
    const res = fetch(this._apiBase, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ action: act }),
    })
      .then((r) => r.json())
      .catch((err) => console.log(err));

    return res;
  };
  getAllRoutes = async () => {
    const res = await this.getResource('getRoutes');
    return res;
  };
}
