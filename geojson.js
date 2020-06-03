var geojsonFeature = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "",
        "popupContent ": "Brandenburg Gate",
        name: "Brandenburg Gate",
        amenity: "dsggdg",
      },
      geometry: {
        type: "Point",
        coordinates: [13.377667665481567, 52.51627309503224],
      },
    },
    {
      type: "Feature",
      properties: {
        stroke: "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        fill: "#555555",
        "fill-opacity": 0.5,
        popupContent: "Victory Column",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [13.351478576660156, 52.51569854950095],
            [13.346586227416992, 52.51616863276716],
            [13.344697952270508, 52.513765932124336],
            [13.350706100463865, 52.512042174642346],
            [13.356714248657227, 52.5142882695271],
            [13.350019454956055, 52.51575078122332],
            [13.351478576660156, 52.51569854950095],
          ],
        ],
      },
    },
  ],
};
