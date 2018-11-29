let component = ReasonReact.statelessComponent("PlaceList");

let s = ReasonReact.string;

let make = _children => {
  ...component,
  render: _self =>
    <div>
      <ul>
        {
          Data.places
          ->Belt.List.map(place => <li key={place.id}> place.name->s </li>)
          ->Array.of_list
          ->ReasonReact.array
        }
      </ul>
    </div>,
};