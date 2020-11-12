interface Strategy {
  execute(a: number, b: number)
}

class StrategyAdd implements Strategy {
  execute(a: number, b: number) {
    return a + b;
  }
}

class StrategySubtract implements Strategy {
  execute(a: number, b: number) {
    return a - b;
  }
}

class StrategyMultiply implements Strategy {
  execute(a: number, b: number) {
    return a * b;
  }
}

class Context {
    private strategy: Strategy

    setStrategy(strategy: Strategy) {
      this.strategy = strategy;
    }

    executeStrategy(a: number, b: number) {
      return this.strategy.execute(a, b);
    }
}

function strategyTest(): void{
  const context = new Context();
  const strategyAdd = new StrategyAdd();
  const strategySubtract = new StrategySubtract();
  const strategyMultiply = new StrategyMultiply();

  context.setStrategy(strategyAdd);
  console.log(`strategyAdd: ${context.executeStrategy(5, 8)}`);
  context.setStrategy(strategySubtract);
  console.log(`strategySubtract: ${context.executeStrategy(5, 8)}`);
  context.setStrategy(strategyMultiply);
  console.log(`strategyMultiply: ${context.executeStrategy(5, 8)}`);
}

strategyTest();
