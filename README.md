# Simple Cafe app using React

This is a SPA (single page app) consisting of several react components. In it's current state, it is not perfect. If you can think of ways to improve it (code-wise, design-wise), reach out to your teacher on slack.

<img width="944" height="719" alt="Screenshot 2025-11-11 at 15 53 38" src="https://github.com/user-attachments/assets/58538e87-4b5e-4cca-81f4-12eabf9c3e0c" />
<img width="936" height="577" alt="Screenshot 2025-11-11 at 15 53 46" src="https://github.com/user-attachments/assets/4ab9b705-eb6d-465d-a58d-4c1fda222cb4" />


This code mostly contains things that we covered in class, but note a few changes:

1. Added an Events component which consists of multiple Event components. And used Bootstrap classes to format the events in a [row](https://getbootstrap.com/docs/4.0/layout/grid/) (see `src/components/Event.jsx` and `src/components/Events.jsx`).
2. Now using the Bootstrap classes ["list-group" and "list-group-item"](https://getbootstrap.com/docs/4.0/components/list-group/) to style the `ul` and `li` tags. (see `src/components/Menu.jsx`).
3. Now using Boostrap classes to [center](https://getbootstrap.com/docs/4.0/utilities/flex/#justify-content) the button under the Menu.
