console.clear();
class SimpleQuzEngine {
  /**
   * @private
   * @type{Array}
   */
  #aqestionAndAnswer = [
    {
      question: "Waht color has the sun",
      answer: "yellow",
    },
    { question: "How planets to we have in our solar system", answer: "8" },
  ];
  /**
   *
   * @private
   * @type{number}
   */
  #currentQuestion;
  constructor() {}
  start() {
    this.#currentQuestion = 0;
  }
}

const SimpleQuz = new SimpleQuzEngine();
SimpleQuz.start();
