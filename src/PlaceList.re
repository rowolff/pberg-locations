type state = {term: string};

type action =
  | Search(string)
  | Reset;

let component = ReasonReact.reducerComponent(__MODULE__);

let s = ReasonReact.string;

let make = _children => {
  ...component,
  initialState: () => {term: ""},
  reducer: (action, _state) =>
    switch (action) {
    | Search(text) => ReasonReact.Update({term: text})
    | Reset => ReasonReact.Update({term: ""})
    },

  render: self => {
    let filteredPlaces =
      Data.places->Belt.List.keep(place =>
        Js.String.includes(
          self.state.term->String.lowercase,
          place.name->String.lowercase,
        )
      );
    <div>
      <input
        onChange={
          event => self.send(Search(ReactEvent.Form.target(event)##value))
        }
        placeholder="search here"
      />
      <ul>
        {
          filteredPlaces
          ->Array.of_list
          ->Belt.Array.map(place =>
              <li key={place.id}>
                <div> place.name->s </div>
                <img src={place.image.url} alt={place.name} />
                {
                  switch (place.image.attributionUrl) {
                  | None => <p> place.image.attribution->s </p>
                  | Some(url) => <a href=url> place.image.attribution->s </a>
                  }
                }
                <Phone phone={place.phone} />
              </li>
            )
          ->ReasonReact.array
        }
      </ul>
    </div>;
  },
};