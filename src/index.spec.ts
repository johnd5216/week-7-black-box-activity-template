import { getCalculator, ICalculator } from './index';

describe('Calculator', (): void => {
  let calculator: ICalculator;

  beforeEach(async (): Promise<void> => {
    const Calculator: any = await getCalculator();
    calculator = new Calculator();
  });

  it('should display `1` when pressOne() is invoked', (): void => {

    calculator.pressOne();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('1');

  });

  it('should display `2` when pressTwo() is invoked', (): void => {

    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('2');

  });

  it('should display `3` when pressThree() is invoked', (): void => {

    calculator.pressThree();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('3');

  });

  it('should display `4` when pressFour() is invoked', (): void => {

    calculator.pressFour();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('4');

  });

  it('should display `5` when pressFive() is invoked', (): void => {

    calculator.pressFive();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('5');

  });

  it('should display `6` when pressSix() is invoked', (): void => {

    calculator.pressSix();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('6');

  });

  it('should display `7` when pressSeven() is invoked', (): void => {

    calculator.pressSeven();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('7');

  });

  it('should display `8` when pressEight() is invoked', (): void => {

    calculator.pressEight();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('8');

  });

  it('should display `9` when pressNine() is invoked', (): void => {

    calculator.pressNine();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('9');

  });

  it('should display `10` when pressFour() and pressSix() are added', (): void => {

    calculator.pressFour();
    calculator.pressPlus();
    calculator.pressSix();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('10');

  });

  it('should display `7` when pressThree() and pressTwo() and pressTwo() are added', (): void => {

    calculator.pressThree();
    calculator.pressPlus();
    calculator.pressTwo();
    calculator.pressPlus();
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('7');

  });

  it('should display `10` when pressFive() and pressTwo() are multiplied', (): void => {

    calculator.pressFive();
    calculator.pressMult();
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('10');

  });

  it('should display `1` when pressOne() and pressOne() are multiplied', (): void => {

    calculator.pressOne();
    calculator.pressMult();
    calculator.pressOne();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('1');

  });

  it('should display `10` when pressFive() and pressTwo() are multiplied', (): void => {

    calculator.pressFive();
    calculator.pressMult();
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('10');

  });

  it('should display `0` when pressFive() and pressZero() are multiplied', (): void => {

    calculator.pressFive();
    calculator.pressMult();
    calculator.pressZero();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0');

  });

  it('should display `5` when pressFive() and pressZero() are subtracted', (): void => {

    calculator.pressFive();
    calculator.pressMinus();
    calculator.pressZero();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('5');

  });

  it('should display `-5` when pressZero() and pressFive() are subtracted', (): void => {

    calculator.pressZero();
    calculator.pressMinus();
    calculator.pressFive();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-5');

  });

  it('should display `Error` when pressFive() and pressZero() are divided', (): void => {

    calculator.pressFive();
    calculator.pressDiv();
    calculator.pressZero();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    const parsedValue = parseFloat(displayValue);
    const isInteger = Number.isInteger(parsedValue);

    expect(isInteger).toBe(false);
  });

  it('should display `21` when pressFive() + pressTwo() * pressThree()', (): void => {

    calculator.pressFive();
    calculator.pressPlus();
    calculator.pressTwo();
    calculator.pressMult()
    calculator.pressThree()
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('11');

  });

  it('should display `10.5` when pressFive() and pressDot() and pressFive()', (): void => {

    calculator.pressFive();
    calculator.pressDot()
    calculator.pressFive()
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('5.5');

  });

  it('should display `10.5` when pressFive() and pressDot() and pressFive() and pressPlus() and pressFive()', (): void => {

    calculator.pressFive();
    calculator.pressDot()
    calculator.pressFive()
    calculator.pressPlus()
    calculator.pressFive()
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('10.5');

  });

  it('should display `5` when pressFive() and pressDot() and pressFive() and pressClear() and pressFive()', (): void => {

    calculator.pressFive();
    calculator.pressDot()
    calculator.pressFive()
    calculator.pressClear()
    calculator.pressFive()
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('5');

  });

  it('should display `10.5` when pressFive() and pressDot() and pressFive() minus pressSix()', (): void => {

    calculator.pressFive();
    calculator.pressDot()
    calculator.pressFive()
    calculator.pressMinus()
    calculator.pressSix()
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-0.5');

  });

  it('should display `0.5` when pressMinus() and pressSeven() and pressDot() and pressFive() and pressEight()', (): void => {

    calculator.pressMinus();
    calculator.pressSeven();
    calculator.pressDot()
    calculator.pressFive()
    calculator.pressPlus();
    calculator.pressEight()
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0.5');

  });

  it('should display `-0.5` when pressMinus() and pressEight() and pressDot() and pressFive() and pressSeven()', (): void => {

    calculator.pressMinus();
    calculator.pressEight();
    calculator.pressDot()
    calculator.pressFive()
    calculator.pressPlus();
    calculator.pressSeven()
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-1.5');

  });

  it('should display `3` when pressMinus() and pressEight() and pressDot() and pressFive() and pressSeven()', (): void => {

    calculator.pressMinus();
    calculator.pressEight();
    calculator.pressMult();
    calculator.pressZero()
    calculator.pressDot()
    calculator.pressFive()
    calculator.pressPlus();
    calculator.pressSeven()
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('3');

  });

  it('should display `-0.5` when pressMinus() and pressEight() and pressDot() and pressFive() and pressClear() and pressSeven()', (): void => {

    calculator.pressMinus();
    calculator.pressEight();
    calculator.pressMult();
    calculator.pressZero()
    calculator.pressDot()
    calculator.pressFive()
    calculator.pressPlus();
    calculator.pressClear()
    calculator.pressSeven()
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('7');

  });

  it('should display `-6` when pressMinus() pressThree() pressMinus() + pressThree()', (): void => {

    calculator.pressMinus();
    calculator.pressThree();
    calculator.pressMinus();
    calculator.pressThree();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-6');

  });

  it('should display `-6` when pressMinus() pressThree() pressMinus() + pressThree()', (): void => {

    calculator.pressMinus();
    calculator.pressThree();
    calculator.pressPlus();
    calculator.pressMinus()
    calculator.pressThree();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-6');

  });

  it('should display `-6` when pressMinus() pressThree() pressMinus() + pressThree()', (): void => {

    calculator.pressThree();
    calculator.pressPlus();
    calculator.pressMinus()
    calculator.pressThree();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0');

  });

  it('should display `-6` when pressMinus() pressThree() pressMult() + pressMinus() and pressTwo()', (): void => {

    calculator.pressMinus();
    calculator.pressThree();
    calculator.pressMult()
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-6');

  });

  it('should display `-3` when pressMinus() pressThree() pressMult() + pressMinus() and pressTwo()', (): void => {

    calculator.pressMinus();
    calculator.pressSix();
    calculator.pressDiv()
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-3');

  });

  it('should display `3` when pressMinus() pressThree() pressMult() + pressMinus() and pressTwo()', (): void => {

    calculator.pressSix();
    calculator.pressDiv()
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('3');

  });

  it('should display `4` when pressMinus() pressThree() pressMult() + pressMinus() and pressTwo()', (): void => {

    calculator.pressMinus();
    calculator.pressSix();
    calculator.pressDiv()
    calculator.pressOne();
    calculator.pressDot();
    calculator.pressFive()
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-4');

  });

  it('should display `4` when pressMinus() pressThree() pressMult() + pressMinus() and pressTwo()', (): void => {

    calculator.pressMinus();
    calculator.pressSix();
    calculator.pressMult()
    calculator.pressOne();
    calculator.pressDot();
    calculator.pressFive()
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-9');

  });

  it('should display `4` when pressMinus() pressThree() pressMult() + pressMinus() and pressTwo()', (): void => {

    calculator.pressMinus();
    calculator.pressSix();
    calculator.pressDiv()
    calculator.pressSeven();
    calculator.pressDot();
    calculator.pressFive()
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-0.8');

  });

  it('should display `4` when pressMinus() pressThree() pressMult() + pressMinus() and pressTwo()', (): void => {

    calculator.pressSix();
    calculator.pressDiv();
    calculator.pressSeven();
    calculator.pressDot();
    calculator.pressFive();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0.8');

  });

  it('should display `4` when pressMinus() pressThree() pressMult() + pressMinus() and pressTwo()', (): void => {

    calculator.pressSix();
    calculator.pressDiv()
    calculator.pressOne();
    calculator.pressDot();
    calculator.pressFive();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('4');

  });

  it('should display `4` when pressMinus() pressThree() pressMult() + pressMinus() and pressTwo()', (): void => {

    calculator.pressSix();
    calculator.pressDiv();
    calculator.pressFour();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('1.5');

  });

  it('should display `4` when pressMinus() pressThree() pressMult() + pressMinus() and pressTwo()', (): void => {
    
    calculator.pressMinus();
    calculator.pressSix();
    calculator.pressDiv();
    calculator.pressFour();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-1.5');

  });

  it('should display `4` when pressMinus() pressThree() pressMult() + pressMinus() and pressTwo()', (): void => {

    calculator.pressMinus()
    calculator.pressSix();
    calculator.pressDiv()
    calculator.pressClear()
    calculator.pressFour();
    calculator.pressFive();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('45');

  });

  it('should display `4` when pressMinus() pressThree() pressMult() + pressMinus() and pressTwo()', (): void => {

    calculator.pressMinus()
    calculator.pressSix();
    calculator.pressZero();
    calculator.pressZero();
    calculator.pressDiv();
    calculator.pressTwo();
    calculator.pressSeven();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-22.22222222222222');

  });

  it('should display `4` when pressMinus() pressThree() pressMult() + pressMinus() and pressTwo()', (): void => {

    calculator.pressMinus()
    calculator.pressSix();
    calculator.pressDot()
    calculator.pressZero();
    calculator.pressFive();
    calculator.pressMult();
    calculator.pressTwo();
    calculator.pressDot()
    calculator.pressZero();
    calculator.pressFive();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-12.402499999999998');

  });

  it('should display `4` when pressMinus() pressThree() pressMult() + pressMinus() and pressTwo()', (): void => {

    calculator.pressMinus()
    calculator.pressSix();
    calculator.pressDot()
    calculator.pressZero();
    calculator.pressFive();
    calculator.pressDiv();
    calculator.pressTwo();
    calculator.pressDot()
    calculator.pressZero();
    calculator.pressFive();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-2.951219512195122');

  });

  it('should display `4` when pressMinus() pressThree() pressMult() + pressMinus() and pressTwo()', (): void => {

    calculator.pressMinus()
    calculator.pressSix();
    calculator.pressPlus();
    calculator.pressTwo();
    calculator.pressEquals();
    calculator.pressMult();
    calculator.pressFive();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-20');

  });
  

});
