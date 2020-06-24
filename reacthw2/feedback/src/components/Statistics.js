import React from "react";
import styles from "./Statistics.module.css";

//кнопки статистики.
//options - это методов класса секции(коллбеки, которые я передаю)
const FeedbackOptions = ({ options }) => {
  return (
    <div className={styles["feedback-options"]}>
      <button className={styles["btn"]} onClick={options.leaveGood}>
        Good
      </button>
      <button className={styles["btn"]} onClick={options.leaveNeutral}>
        Neutral
      </button>
      <button className={styles["btn"]} onClick={options.leaveBad}>
        Bad
      </button>
    </div>
  );
};
//

//принимает данные статистики и выводит их
const Statistics = ({ good, neutral, bad, total, positiveDomination }) => {
  return (
    <div className={styles["Statistics"]}>
      <span className={styles["stat"]}>Good: {good}</span>
      <span className={styles["stat"]}>Neutral: {neutral}</span>
      <span className={styles["stat"]}>Bad: {bad}</span>
      <span className={styles["stat"]}>Total: {total}</span>
      <span className={styles["stat"]}>
        Positive feedback domination: {positiveDomination}%
      </span>
    </div>
  );
};
//

//классовый компонент секции. он тут всем заправляет
//сделал его для всей отрисовки вообще. не знаю каким образом можно
//перерисовывать сами статы без кнопок, ведь смысл кнопки перерисовывать
//была идея сделать кнопки классом, но тогда кнопки будут обновляться тоже
//в общем хочу перерисовывать только статы, а сделал очень тупо
class Section extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  //сумму и процент позитивных никуда не записываю, просто возвращаю из коллбек функций

  //коллбеки. ничего особенного.
  leaveGood = () => this.setState({ good: this.state.good + 1 });

  leaveBad = () => this.setState({ bad: this.state.bad + 1 });

  leaveNeutral = () => this.setState({ neutral: this.state.neutral + 1 });
  //

  //сумма
  countTotal = () => this.state.good + this.state.neutral + this.state.bad;
  //

  // подсчет процентов позитивных
  howManyPositive = () =>
    Math.round((100 / this.countTotal()) * this.state.good);
  //

  render() {
    return (
      <div className={styles["Section"]}>
        <span className={styles["title"]}>{this.props.title}</span>

        {/* не понимаю к чему в задании был onLeaveFeedback помимо options */}
        <FeedbackOptions
          options={{
            leaveGood: this.leaveGood,
            leaveNeutral: this.leaveNeutral,
            leaveBad: this.leaveBad,
          }}
        />

        {/* проверка на статистику */}
        {this.countTotal() >= 1 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotal()}
            positiveDomination={this.howManyPositive()}
          />
        ) : (
          <span className={styles["noFeedback"]}>
            No feedback given. U can be first
          </span>
        )}
      </div>
    );
  }
}

export default Section;
