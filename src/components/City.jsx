import styles from './City.module.css';

const formatDate = date =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date));

function City({cities}) {
  // TEMP DATA
  // const currentCity = {
  //   cityName: 'Lisbon',
  //   emoji: '🇵🇹',
  //   date: '2027-10-31T15:59:59.138Z',
  //   notes: 'My favorite city so far!',
  // };

  // const {cityName, emoji, date, notes} = currentCity;
  return (
    <>
      {cities.map(city => (
        <div className={styles.city} key={city.id}>
          <div className={styles.row}>
            <h6>City name</h6>
            <h3>
              <span>{city.emoji}</span> {city.cityName}
            </h3>
          </div>

          <div className={styles.row}>
            <h6>You went to {city.cityName} on</h6>
            <p>{formatDate(city.date || null)}</p>
          </div>

          {city.notes && (
            <div className={styles.row}>
              <h6>Your notes</h6>
              <p>{city.notes}</p>
            </div>
          )}

          <div className={styles.row}>
            <h6>Learn more</h6>
            <a
              href={`https://en.wikipedia.org/wiki/${city.cityName}`}
              target="_blank"
              rel="noreferrer"
            >
              Check out {city.cityName} on Wikipedia &rarr;
            </a>
          </div>

          <div>{/* <ButtonBack /> */}</div>
        </div>
      ))}
    </>
  );
}

export default City;
