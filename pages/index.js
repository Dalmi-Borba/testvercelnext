function Home() {
  return <form action="/api/db" method="post">
      <input type="email" name="email"></input>
      <input type="submit" value="Submit"></input>
    </form>
}

export default Home;