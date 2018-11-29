let component = ReasonReact.statelessComponent("PlaceList");

let s = text => ReasonReact.string(text);

let make = (~places: list(Data.place), _children) => {
  ...component,
  render: _self =>
    <div>
      <ul>
        {
          ReasonReact.array(
            Array.of_list(
              Belt.List.map(places, place => <li> {s(place.name)} </li>),
            ),
          )
        }
      </ul>
    </div>,
};