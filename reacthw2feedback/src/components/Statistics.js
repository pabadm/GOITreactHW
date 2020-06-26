import React from 'react';
import './Statistics.css';
import PropTypes from 'prop-types';
// кнопки статистики.
// options - это методов класса секции(коллбеки, которые я передаю)
const FeedbackOptions = ({ leaveGood, leaveBad, leaveNeutral }) => {
  return (
    <div className="feedback-options">
      <button type="button" className="btn" onClick={leaveGood}>
        Good
      </button>
      <button type="button" className="btn" onClick={leaveNeutral}>
        Neutral
      </button>
      <button type="button" className="btn" onClick={leaveBad}>
        Bad
      </button>
    </div>
  );
};
FeedbackOptions.defaultProps = {
  leaveGood: null,
  leaveBad: null,
  leaveNeutral: null,
};
FeedbackOptions.propTypes = {
  leaveGood: PropTypes.func,
  leaveBad: PropTypes.func,
  leaveNeutral: PropTypes.func,
};
//

//  принимает данные статистики и выводит их
const Statistics = ({ good, neutral, bad, total, positiveDomination }) => {
  return (
    <div className="Statistics">
      <span className="stat">Good: {good}</span>
      <span className="stat">Neutral: {neutral}</span>
      <span className="stat">Bad: {bad}</span>
      <span className="stat">Total: {total}</span>
      <span className="stat">
        Positive feedback domination: {positiveDomination}%
      </span>
    </div>
  );
};
//
Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positiveDomination: 0,
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveDomination: PropTypes.number,
};

// классовый компонент секции. он тут всем заправляет
// сделал его для всей отрисовки вообще. не знаю каким образом можно
// перерисовывать сами статы без кнопок, ведь смысл кнопки перерисовывать
// была идея сделать кнопки классом, но тогда кнопки будут обновляться тоже
// в общем хочу перерисовывать только статы, а сделал очень тупо
class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  // сумму и процент позитивных никуда не записываю, просто возвращаю из коллбек функций

  // коллбеки. ничего особенного.
  leaveGood = () => {
    const { good } = this.state;
    this.setState({ good: good + 1 });
  };

  leaveBad = () => {
    const { bad } = this.state;
    this.setState({ bad: bad + 1 });
  };

  leaveNeutral = () => {
    const { neutral } = this.state;
    this.setState({ neutral: neutral + 1 });
  };
  //

  // сумма
  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  //

  // подсчет процентов позитивных
  howManyPositive = () => {
    const { good } = this.state;
    return Math.round((100 / this.countTotal()) * good);
  };
  //

  render() {
    const { good, neutral, bad } = this.state;
    const { title } = this.props;
    return (
      <div className="Section">
        <span className="title">{title}</span>

        {/* не понимаю к чему в задании был onLeaveFeedback помимо options */}
        <FeedbackOptions
          leaveGood={this.leaveGood}
          leaveNeutral={this.leaveNeutral}
          leaveBad={this.leaveBad}
        />

        {/* проверка на статистику */}
        {this.countTotal() >= 1 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotal()}
            positiveDomination={this.howManyPositive()}
          />
        ) : (
          <span className="noFeedback">No feedback given. U can be first</span>
        )}
      </div>
    );
  }
}
Section.defaultProps = {
  title: 'just a title',
};
Section.propTypes = {
  title: PropTypes.string,
};
export default Section;
