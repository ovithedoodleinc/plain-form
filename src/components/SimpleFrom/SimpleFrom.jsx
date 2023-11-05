import { useState } from "react";

function SimpleFrom() {
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      username,
      password,
      gender,
      religion,
      languages,
      bevarages,
    } = e.target.elements;

    const data = {
      name: name.value,
      email: email.value,
      username: username.value,
      password: password.value,
      gender: gender.value,
      religion: religion.value,
      languages: [],
      bevarages: [],
    };

    languages.forEach((language) =>
      language.checked ? data.languages.push(language.value) : ""
    );

    bevarages.forEach((bevarage) =>
      bevarage.checked ? data.bevarages.push(bevarage.value) : ""
    );

    console.log(data);

    setData(data);

    e.target.reset();
  };

  return (
    <div>
      {!data ? (
        <div>
          <h1>Simple Login Form</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name: <input type="text" name="name" required />
            </label>
            <br />
            <br />
            <label htmlFor="email">
              Email: <input type="text" name="email" required />
            </label>
            <br />
            <br />
            <label htmlFor="username">
              Username: <input type="text" name="username" required />
            </label>
            <br />
            <br />
            <label htmlFor="password">
              Password: <input type="password" name="password" required />
            </label>
            <br />
            <br />
            <label htmlFor="gender">
              Gender: <input type="radio" name="gender" value="male" required />{" "}
              Male <input type="radio" name="gender" value="female" required />{" "}
              Female
            </label>
            <br />
            <br />
            <label htmlFor="religion">
              Religion:{" "}
              <input type="radio" name="religion" value="muslim" required />{" "}
              Muslim{" "}
              <input type="radio" name="religion" value="hindu" required />{" "}
              Hindu
              <input type="radio" name="religion" value="budda" required />{" "}
              Budda{" "}
              <input type="radio" name="religion" value="christian" required />{" "}
              Christian
            </label>
            <br />
            <br />
            <label htmlFor="languages">
              Languages: <input type="checkbox" name="languages" value="c" /> C{" "}
              <input type="checkbox" name="languages" value="c++" /> C++
              <input type="checkbox" name="languages" value="python" /> Python
              <input type="checkbox" name="languages" value="javascript" />{" "}
              Javascript
            </label>
            <br />
            <br />
            <label htmlFor="bevarages">
              Bevarages:{" "}
              <input type="checkbox" name="bevarages" value="coffee" /> Coffee{" "}
              <input type="checkbox" name="bevarages" value="tea" /> Tea
            </label>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Username: {data.username}</p>
          <p>Password: {data.password}</p>
          <p>Gender: {data.gender}</p>
          <p>Religion: {data.religion}</p>
          <p>Languages: {data.languages.join(", ")}</p>
          <p>Bevarages: {data.bevarages.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default SimpleFrom;
