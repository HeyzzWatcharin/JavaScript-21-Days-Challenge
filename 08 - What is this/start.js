(() => {
  // เริ่มเขียนโค้ด

  // 1. Lexical scope & Dynamic scope


  // 2. How to know what is "this"?
  function printName() {
    console.log(this);
    console.log(`My Name is ${this.name}, I'm ${na}`);
  }

  // 2.1 Invoker object
  const watcharin = { name: 'Watcharin', printName };
  const Stamp = { name: 'Stamp', printName }

  watcharin.printName();
  Stamp.printName();

  // 2.2 Global object (window, global)
  name = 'Global';
  printName();

  // 2.3 Constructor function
  function Person(name) {
    this.name = name;
    this.printName = printName;
  }

  const watcharin = new Person('Watcharin')
  watcharin.printName()

  // 3. call(), apply(), and bind()
  function Person2(name, nationality, city) {
    this.name = name;
    this.nationality = nationality
    this.city = city

    printName(this.nationality, this.city)
    printName.call(this, this.nationality, this.city)
    printName.apply(this, [this.nationality, this.city])

    const printWatcharin = printName.bind(this)
    printWatcharin(this.nationality, this.city)
  }

  const watcharin = new Person2('Watcharin', 'Thai', 'Nan')

})();
