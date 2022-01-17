import React, { Component } from 'react';

class Inputs extends Component {
  state = {
    name: '',
    country: '',
    bio: '',
    birthDay: '',
    skills: [],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, country, bio, birthDay, skills } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={name}
          onChange={this.handleChange}
        />{' '}
        <br /> <br />
        <select name="country" value={country} onChange={this.handleChange}>
          <option>Select Country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Indonesia">Indonesia</option>
          <option value="China">China</option>
        </select>
        <br />
        <textarea
          onChange={this.handleChange}
          name="bio"
          placeholder="Tell me About yourself"
          value={bio}
        ></textarea>{' '}
        <br />
        <input
          type="date"
          name="birthDay"
          value={birthDay}
          onChange={this.handleChange}
        />{' '}
        <br />
        <input type="radio" name="gender" value="Male" />
        Male
        <input type="radio" name="gender" value="Female" />
        Female
        <input type="radio" name="gender" value="Others" />
        Others
        <br />
        <h2>Skills :</h2>
        <input
          type="checkbox"
          value="Java"
          name="skills"
          checked={skills.includes('Java')}
          onChange={this.handleSkills}
        />
        <br />
        <button onClick={() => console.log(this.state)}>Show Data</button>
      </div>
    );
  }
}

export default Inputs;
