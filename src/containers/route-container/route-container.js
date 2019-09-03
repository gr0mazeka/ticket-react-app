import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteSelect } from '../../components/route-select/route-select';
import {
  setRoute,
  setDateReturn,
  setDateStart,
  setCityFrom,
  setCityTo,
  getCityTo,
} from '../../actions/route-actions';

class RouteContainer extends Component {
  // componentDidMount() {
  // console.log('hello, i am componentDidMount route-select');

  // const getResource = () => {
  //   // const tmp = fetch('http://localhost:3000/ticket_module.php', {
  //   const tmp = fetch('http://localhost/ticket-module/ticket_module.php', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify({ action: 'п' }),
  //   })
  //     .then((response) => {
  //       console.log('response', response);
  //       return response.json();
  //     })
  //     .catch((err) => console.log('error ', err));
  //   return tmp;
  // };
  // const getAllRoutes = async () => {
  //   const res = await getResource();
  //   console.log(res);
  //   return res;
  // };
  // getAllRoutes();
  // }
  render() {
    const {
      route,
      routeInfo,
      setRoute,
      setDateStart,
      setDateReturn,
      setCityFrom,
      setCityTo,
      getCityTo,
      tmp,
    } = this.props;
    console.log(tmp);
    return (
      <div>
        <RouteSelect
          routes={route.routes}
          dateStart={routeInfo.dateStart}
          dateReturn={routeInfo.dateReturn}
          citiesFrom={route.citiesFrom}
          citiesTo={route.citiesTo}
          route={routeInfo.route}
          setRoute={setRoute}
          setDateReturn={setDateReturn}
          setDateStart={setDateStart}
          setCityFrom={setCityFrom}
          setCityTo={setCityTo}
          getCityTo={getCityTo}
          isFetching={route.isFetching}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log('mStateTP', store);
  return { route: store.route, routeInfo: store.routeInfo };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setRoute: (route) => dispatch(setRoute(route)),
    setDateStart: (date) => dispatch(setDateStart(date)),
    setDateReturn: (date) => dispatch(setDateReturn(date)),
    setCityFrom: (city) => dispatch(setCityFrom(city)),
    setCityTo: (city) => dispatch(setCityTo(city)),
    getCityTo: (route) => dispatch(getCityTo(route)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteContainer);
