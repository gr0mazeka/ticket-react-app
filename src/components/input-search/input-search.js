import React from 'react';
import './input-search.css';

const list = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
];
const ListFill = (props) => {
  return props.arr.map((todo, index) => (
    <li tabIndex="-1" key={index}>
      <a href="/#" onClick={props.onClick}>
        {todo}
      </a>
    </li>
  ));
};
class InputSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      isActive: false,
      isClear: false,
    };
    this.wrapper = React.createRef();
  }

  componentWillUnmount() {
    this.removeOutsideClickListener();
  }

  addOutsideClickListener() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  removeOutsideClickListener() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  onShow() {
    this.addOutsideClickListener();
  }

  onHide = () => {
    this.removeOutsideClickListener();
  };
  // toggleMenu = () => {
  //   this.setState(
  //     (prevState) => ({ isActive: !prevState.isActive }),
  //     () => {
  //       this.state.isActive ? this.onShow() : this.onHide();
  //     }
  //   );
  // };

  onClickOutside() {
    this.setState({ isActive: false });
  }

  handleDocumentClick = (e) => {
    if (this.wrapper.current && !this.wrapper.current.contains(e.target)) {
      this.onClickOutside();
      this.onHide();
    }
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
    if (value) {
      if (!this.state.isActive) {
        this.setState({ isActive: true });
        this.onShow();
      }
    } else {
      this.onClickOutside();
      this.onHide();
    }
  };
  handleClick = (e) => {
    this.setState({ isActive: false, value: e.target.text, isClear: true });
    this.onHide();
  };
  clearButtonInput = () => {
    this.setState({ isClear: false, value: '' });
  };
  render() {
    const { placeholder } = this.props;
    const { isActive, isClear, value } = this.state;

    return (
      <div className="div-test">
        <input
          value={value}
          type="text"
          className="input__search"
          onChange={this.handleChange}
          autoComplete="off"
          // onClick={this.onClickInput}
          placeholder={placeholder}
        />
        {isClear && (
          <div className="input__svg-box" onClick={this.clearButtonInput}>
            <svg
              height="20"
              width="20"
              viewBox="0 0 20 20"
              className="input__svg"
            >
              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
            </svg>
          </div>
        )}
        <ul
          className="ul-test"
          style={{ display: isActive ? 'block' : 'none' }}
          ref={this.wrapper}
          tabIndex="0"
        >
          {isActive && (
            <ListFill
              arr={list}
              isActive={isActive}
              onClick={this.handleClick}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default InputSearch;
