# Controlled vs Uncontrolled components

## controlled: 
In this example, the inputText state variable is used to store the value of the input field. The handleChange function is called whenever the value of the input field changes. This function updates the inputText state variable with the new value.
The value prop of the input field is set to the inputText state variable. This means that the input field will always display the current value of the inputText state variable.

## uncontrolled:
In this example, the inputRef ref variable is used to access the input field. The handleSubmit function is called when the user clicks the submit button. This function gets the value of the input field using the inputRef ref variable.
The value prop of the input field is not set. This means that the input field will not be controlled by the React component. The input field will manage its own state.


| Feature          | Controlled Component                      | Uncontrolled Component                  |
|------------------|--------------------------------------------|----------------------------------------|
| State            | Managed by the React component             | Managed by the DOM                     |
| Value prop       | Set to the state variable                  | Not set                                |
| onChange event   | Called whenever the value of the input field changes | Not called                  |
| When to use      | When you need tight control over form values and interactions | When you don't need to control the value of the input field |
