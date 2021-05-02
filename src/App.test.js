/*------------------------------
Hacker News Clone Mini Project
------------------------------
1. Create a React app using create-react-app template.
2. Install react-router-dom for routing purposes and axios for making api calls.
3. Divide your application in 2 parts -> Header and Body.
4. In Header, provide links for 2 pages -> Top Stories, Latest Stories, Best Stories.
5. In App.js, Render Header and Body.
6. In the Body, define the router (with BrowserRouter, Switch, Route) to render the appropriate component for each of the above 3 three links.
7. With in each component, fetch the stories using the following apis.
8. The first set apis will return an array of story ids. Using the second api, fetch story json for the first 30 story ids returned.
9. Once, you complete all the above steps, try to create a custom Hook, which does the fetching of stories.
10. The above custom Hook will accept a param <type> - (top, new, best) which can be accessed from the route url.
------
APIS :
------
Top Stories API: https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
New Stories API: https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty
Best Stories API: https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty
Story Details API: https://hacker-news.firebaseio.com/v0/item/{story_id.json}?print=pretty
Ex: https://hacker-news.firebaseio.com/v0/item/26061935.json?print=pretty
-----
NOTE:
-----
You can use either functional components with Hooks or Class components with Life cycle methods.
But I prefer you all choose first to go with functional components with Hooks.


New Stories Endpoint: https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty

Sample Website : https://news.ycombinator.com/
*/

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
