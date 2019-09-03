import React from 'react';
import { SelectRoute } from '../select-route/select-route';
import PropTypes from 'prop-types';
import InputDayPicker from '../input-day-picker/input-day-picker';
import AsyncSelect from 'react-select/async';

import InputSearch from '../input-search/input-search';

import './route-select.css';

export class RouteSelect extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      visible: false,
    };
  }
  onChangeTest = (val) => {
    if (val) this.setState({ visible: true });
    else this.setState({ visible: false });
    this.setState({ value: val });
  };
  onChange = (input) => {
    const inputValue = input.replace(/\D/g, '');
    this.setState({ value: inputValue });
    // return inputValue;
    return input;
  };
  getResource = (input) => {
    if (!input) {
      return Promise.resolve({ options: [] });
    }
    const tmp = fetch(
      'http://localhost/ticket-module/ticket_module.php?action=' + input,
      {
        // mode: 'cors',
        // credentials: 'include',
        // method: 'POST',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        // body: JSON.stringify({ action: input }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log('error fetch:', err));
    console.log('fetch', tmp);
    return tmp;
  };
  getAllRoutes = async (input) => {
    const res = await this.getResource(input);
    const abc = res.map((lab, val) => ({ value: val, label: lab }));
    return abc;
    // return res;
  };

  routeChange = (selected) => {
    // this.props.setRoute(selected.value);
    this.props.setRoute(selected.label);
    this.props.getCityTo(selected.label);
  };
  cityFromChange = (selected) => {
    // this.props.setRoute(selected.value);
    this.props.setCityFrom(selected.label);
  };
  cityToChange = (selected) => {
    // this.props.setRoute(selected.value);
    this.props.setCityTo(selected.label);
  };
  // componentDidMount() {}
  render() {
    const {
      routes,
      dateStart,
      dateReturn,
      citiesFrom,
      citiesTo,
      isFetching,
      setDateStart,
      setDateReturn,
    } = this.props;

    return (
      <div className="route__container">
        <AsyncSelect
          // cacheOptions
          isClearable
          placeholder={'Откуда...'}
          // value={this.state.value}
          loadOptions={this.getAllRoutes}
          defaultOptions
          onInputChange={this.onChange}
        />
        <label className="route__select-label">Маршрут</label>
        <SelectRoute
          label={'route'}
          placeholder={'Выберите маршрут'}
          emptyMessage={'Маршрут не найден...'}
          options={routes}
          // isDisabled={false}
          handleChange={this.routeChange}
        />
        <div className="route__select-pair-wrap">
          <div className="header__fb">
            <label className="route__select-label">Место отправления</label>
            <SelectRoute
              label="cityFrom"
              placeholder={'Выберите место отправления'}
              emptyMessage={'Пусто...'}
              isLoading={isFetching}
              options={citiesFrom}
              handleChange={this.cityFromChange}
              isDisabled={citiesFrom.length === 0 ? true : false}
              // isDisabled={route !== null ? false : true}
              // isDisabled={isFetching}
            />
          </div>
          <div className="header__fb">
            <label className="route__select-label">Место назначения</label>
            <SelectRoute
              label="cityTo"
              placeholder={'Выберите место назначения'}
              emptyMessage={'Пусто...'}
              isLoading={isFetching}
              options={citiesTo}
              isDisabled={citiesTo.length === 0 ? true : false}
              // isDisabled={isFetching}
              handleChange={this.cityToChange}
            />
          </div>
          <div className="header__fb">
            <label className="route__select-label">Дата отправления</label>
            <InputDayPicker
              date={dateStart}
              onChangeDate={setDateStart}
              placeholder={'В одну сторону'}
            />
          </div>
          <div className="header__fb">
            <label className="route__select-label">Обратно</label>
            <InputDayPicker
              date={dateReturn}
              onChangeDate={setDateReturn}
              placeholder={'Обратно'}
            />
          </div>
          <div className="header__fb">
            <label className="route__select-label">Место отправления</label>
            <InputSearch
              placeholder={'Откуда...'}
              value={this.state.value}
              onChange={this.onChangeTest}
              visible={this.state.visible}
            />
          </div>
          <div className="header__fb">
            <label className="route__select-label">Место назначения</label>
            <InputSearch
              placeholder={'Куда...'}
              value={this.state.value}
              onChange={this.onChangeTest}
              visible={this.state.visible}
            />
          </div>
        </div>
      </div>
    );
  }
}

RouteSelect.propTypes = {
  routes: PropTypes.array.isRequired,
  citiesTo: PropTypes.array.isRequired,
  citiesFrom: PropTypes.array.isRequired,
  setRoute: PropTypes.func.isRequired,
  getCityTo: PropTypes.func.isRequired,
  setDateReturn: PropTypes.func.isRequired,
  setDateStart: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
