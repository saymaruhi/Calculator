function ShowDate() {
  const curDate = new Date().toLocaleDateString();

  return (
    <div>
        <h2>Date</h2>
      <h2>{curDate}</h2>
    </div>
  );
}
export default ShowDate;
