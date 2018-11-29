let component = ReasonReact.statelessComponent("Phone");

let s = ReasonReact.string;

let make = (~phone, _children) => {
  ...component,
  render: _self =>
    <div>
      {
        switch (phone) {
        | None => ReasonReact.null
        | Some(number) => <div> number->s </div>
        }
      }
    </div>,
};