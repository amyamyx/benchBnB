export const fetchBenches = () => (
  $.ajax({
    type: "GET",
    url: "api/benches",
    error: (err) => console.log(err)
  })
);



