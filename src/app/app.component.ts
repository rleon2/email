import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  color:string;
  title = 'email';
  emails = [
    {name: "James Hatfield", time: "9:50 AM", title: "Weekend Trip", msg: "Hey, are you still going to be able to attend the trip that we discussed the djfkd kdjfion jdjfa kdldf fjdal ljdflajf"},
    {name: "Jack Harrington", time: "9:50 AM", title: "Shipping Confirmation", msg: "This is a message to notify you that your order has been shipped. Expect its arrival in the coming 2-3 business days."},
    {name: "Jill Harper", time: "9:50 AM", title: "Order Confirmation", msg: "Thank you for purchasing this product. This e-mail confirms that we have received your order. A shipping confirmation e-mail will be sent soon."},
    {name: "Keanu Hadd", time: "9:50 AM", title: "New Products", msg: "Hello, valued customer we are launching new products that we think you might be interested in"},
    {name: "Jim Halpert", time: "9:50 AM", title: "This is a title", msg: "This is a very random very random very random message message message"}
  ]
}
