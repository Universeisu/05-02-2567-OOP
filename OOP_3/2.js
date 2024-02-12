class Invoice {
    id = 0;
    customer = " ";
    amount = 0;
    constructor(id, customer, amount) {
      this.id = id;
      this.customer = customer;
      this.amount = amount;
    }
  
    getId() {
      return this.id;
    }
  
    getCustomer() {
      return this.customer;
    }
  
    setCustomer(customer) {
      this.customer = customer;
    }
  
    getAmount() {
      return this.amount;
    }
  
    setAmount(amount) {
      this.amount = amount;
    }
  
    getCustomerId() {
      return this.customer.getId();
    }
  
    getCustomerName() {
      return this.customer.getName();
    }
  
    getCustomerDiscount() {
      return this.customer.getDiscount();
    }
  
    getAmountAfterDiscount() {
      const discount = this.customer.getDiscount() / 100;
      return this.amount - (this.amount * discount);
    }
  
    toString() {
      return `Invoice[id=${this.id}, customer=${this.customer.toString()}, amount=${this.amount}]`;
    }
  }
  
  class Customer {
    id = 0;
    name = "";
    discount = 0;
    constructor(id, name, discount) {
      this.id = id;
      this.name = name;
      this.discount = discount;
    }
  
    getId() {
      return this.id;
    }
  
    getName() {
      return this.name;
    }
  
    getDiscount() {
      return this.discount;
    }
  
    setDiscount(discount) {
      this.discount = discount;
    }
  
    toString() {
      return `${this.name}(${this.id}) (${this.discount}%)`;
    }
  }
  
  const main = () => {
  
  const customer1 = new Customer(1, "Jennie", 10);
  
  const invoice1 = new Invoice(1, customer1, 500);
  
  console.log(customer1.toString()); // => "Invoice[id=1, customer=John Doe(1) (10%), amount=100]"
  
  console.log(invoice1.getAmountAfterDiscount()); // => 90        
  }
  main();