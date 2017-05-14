import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

const towns = [{
  name: 'Poznan',
}, {
  name: 'Warszawa',
}, {
  name: 'Gdańsk',
}, {
  name: 'Krakow',
}];

const universities = [{
  name: 'Politechnika',
}, {
  name: 'Uniwersytet',
}];

const courses = [{
  name: 'Informatyka',
}, {
  name: 'BioInformatyka',
}, {
  name: 'Matematyka',
}, {
  name: 'Automatyka i Robotyka',
}];

const getTownSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : towns.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getUniversitySuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : universities.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getCourseSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : courses.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <span>{suggestion.name}</span>
);

class Onboarding extends Component {
  constructor() {
    super();
    this.state = {
      town: '',
      university: '',
      course: '',
      suggestions: []
    };
  }

  componentWillReceiveProps() {
    if (this.props.location.pathname === '/onboarding' && this.props.preferencesSet) {
      this.props.goToStream();
    }
  }

  onTownChange = (event, { newValue }) => {
    this.setState({
      town: newValue
    });
  };

  onUniversityChange = (event, { newValue }) => {
    this.setState({
      university: newValue
    });
  };

  onCourseChange = (event, { newValue }) => {
    this.setState({
      course: newValue
    });
  };

  onTownSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getTownSuggestions(value)
    });
  };

  onUniversitySuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getUniversitySuggestions(value)
    });
  };

  onCourseSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getCourseSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.goToStream(this.state.town, this.state.university, this.state.course);
  }

  render() {
    const { town, course, university, suggestions } = this.state;

    const townInputProps = {
      placeholder: 'Wprowadz miasto',
      value: town,
      onChange: this.onTownChange
    };

    const universityInputProps = {
      placeholder: 'Wprowadz nazwę uczelni',
      value: university,
      onChange: this.onUniversityChange
    };

    const courseInputProps = {
      placeholder: 'Wprowadz kierunek',
      value: course,
      onChange: this.onCourseChange
    };

    return (
      <div className="ui center aligned container xs-margin">
       <div className="ui segment">
          <h1 className="ui header">Witaj w aplikacji StudNET</h1>
          <h5 className="ui header">Aby ułatwic Tobie korzystanie z aplikacji i spersonalizowac tresci, podaj prosze pare informacji o sobie</h5>
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onTownSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={townInputProps}
            />
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onUniversitySuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={universityInputProps}
            />
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onCourseSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={courseInputProps}
            />
            <button className="ui button xs-margin" type="submit">
              Gotowe!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Onboarding;
