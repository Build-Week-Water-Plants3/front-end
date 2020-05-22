## SPEC:

1. `user` can sign-up / create an account by providing a unique `username`, a valid mobile `phoneNumber` and a `password`. 

2. `user` can login to an authenticated session using the credentials provided at account creation / signup.

3. Authenticated `user` can Create, Update and Delete a `plant` object. _At a minimum, each `plant` must have the following properties:

`id`: Integer

`nickname`: String

`species` : String

`h2oFrequency`: Type determined by implementation

`image`: (optional)_

4. Authenticated `user` can view a list of created `plants`. A `plant` can be deleted or selected to present `user` with a detail view where `user` can then update any property of the selected `plant`. 

5. Authenticated `user` can update their `phoneNumber` and `password`.

- What features may you wish to put in a future release?

    1. Authenticated `user` can set up push notifications to be triggered when an `h2oFrequency` of any `plant` arrives / has elapsed. 

    2. Implement a feature that allows an authenticated `user` to see an appropriate suggested `h2oFrequency` based on `species` using the API of your choice. 

    3. Authenticated `user` can upload `image`s of a `plant`. If no user `image` is provided, a placeholder `image` of a plant of the same `species` populates the view. 

- What do the top 3 similar apps do for their users?

    Plan Nanny

    Happy Plant

    Waterbot
