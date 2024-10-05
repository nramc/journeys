import {GeoCodingContext, GeoCodingFeature} from "./geo-coding-feature";

describe('GeoCodingFeature', () => {

  let geoCodingLocation = new GeoCodingFeature(
    'Chennai, Tamil Nadu, India',
    {type: "Point", coordinates: [80.270185880363, 13.08369403771086]},
    [
      new GeoCodingContext('region.371', 'admin_area', 'Tamil Nadu'),
      new GeoCodingContext('country.123', 'admin_area', 'India')
    ]
  );

  let geoCodingArea = new GeoCodingFeature(
    'Chennai, Tamil Nadu, India',
    {
      type: "MultiPolygon", coordinates: [
        [
          [
            [80.270185880363, 13.08369403771086]
          ]
        ],
      ]
    }
  );

  it('should create an instance', () => {
    expect(geoCodingLocation).toBeTruthy();
  });
  it('should provide correct place name', () => {
    expect(geoCodingLocation.name).toEqual('Chennai, Tamil Nadu, India');
  });
  it('should provide correct location', () => {
    expect(geoCodingLocation.location?.type).toBe('Point');
    expect(geoCodingLocation.location?.coordinates).toEqual([80.270185880363, 13.08369403771086]);
    expect(geoCodingLocation.area).toBeFalsy();
  });
  it('should provide correct country', () => {
    expect(geoCodingLocation.country).toBe('India');
  });
  it('should provide correct state', () => {
    expect(geoCodingLocation.state).toBe('Tamil Nadu');
  });
  it('should provide correct area', () => {
    expect(geoCodingArea.area?.type).toBe('MultiPolygon');
    expect(geoCodingArea.area?.coordinates).toBeTruthy();
    expect(geoCodingArea.location).toBeFalsy();
  });
});
