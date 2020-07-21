![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)

# React Forms

Forms to allow users to interact with our web application. In HTML forms can have some unexpected behaviors for new developers.

## Learning Objectives

- Describe how HTML forms work.
- Use buttons inside HTML forms.
- Build forms utilizing accessibility best practices.
- Distinguish between controlled and uncontrolled form elements in React.

## HTML Form Element

In HTML, the `<form></form>` element represents a document section containing interactive controls for submitting information.

- Any `button` **without** a type attribute, or any `button` or `input` element with the an attribute of `type="submit"` will cause a `submit` event to be fired.
- By default, when forms are submitted they will cause the page to reload in HTML.
- In order to prevent the page from reloading, you should listen for the submit event using JavaScript and make sure to call the `preventDefault` method on the event.

## HTML Form Elements

Form elements include various types of interactive elements, such as text fields, checkboxes, radio buttons, checkboxes, select elements and many more. There are also a variety of [type attributes](https://www.w3schools.com/html/html_form_input_types.asp) for the `<input/>` element that can change the behavior of the input as well as restrict the type of data that can be entered.

It is particularly important to pay attention to accessibility [best practices](https://webaim.org/techniques/forms/controls) when creating forms in HTML.

```html
<form>
  <!-- Connect every field to a label using the `for` attribute -->
  <!-- The `id` of the input uniquely connects the label and input -->
  <label for="email">Email:</label>
  <input id="email" type="email" />
  <label for="password">Password:</label>
  <input id="password" type="password" />
</form>
```

## Forms in React

By their nature, forms are stateful. They need to _remember_ information that will be submitted to the server for processing. There is a pattern that we use for this in React. You can use this same pattern for all form processing in React!

```jsx
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // do something with the data in the component state
  };
  render() {
    // Note that we need to use `htmlFor` instead of `for` in JSX
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">
        <input
          id="username"
          type="text"
          onChange={this.handleChange}
          value={this.state.username}
        />
      </form>
    );
  }
}
```

We call these form elements "controlled" because we're allowing React to _control_ the value of them.

## Additional Resources

- [React Forms | React Docs](https://reactjs.org/docs/forms.html)
- [React Forms | W3Schools](https://www.w3schools.com/react/react_forms.asp)

## [License](LICENSE)

All content is licensed under a CC­BY­NC­SA 4.0 license.

All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
