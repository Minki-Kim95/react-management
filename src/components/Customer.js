import React from 'react';

class Customer extends React.Component {
  render() {
    const { id, image, name, birthday, gender, job } = this.props;
    return (
      <div>
        <CustomerProfile name={name} id={id} image={image} />
        <CustomerInfo birthday={birthday} gender={gender} job={job} />
      </div>
    );
  }
}

class CustomerProfile extends React.Component {
  render() {
    const { id, image, name } = this.props;
    return (
      <div>
        <img src={image} alt="profile" />
        <h2>
          {name} ({id})
        </h2>
      </div>
    );
  }
}

class CustomerInfo extends React.Component {
  render() {
    const { birthday, gender, job } = this.props;
    return (
      <div>
        <p>{birthday}</p>
        <p>{gender}</p>
        <p>{job}</p>
        <hr/>
      </div>
    );
  }
}

export default Customer;
