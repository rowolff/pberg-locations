let component = ReasonReact.statelessComponent(__MODULE__);

let s = ReasonReact.string;

let make = _children => {
  ...component,
  render: _self =>
    <div>
      <ul>
        {
          Data.places
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
    </div>,
};