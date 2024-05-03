export default function Card() {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img
            src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili-top-view_2829-19996.jpg?size=626&ext=jpg&ga=GA1.1.546627649.1711611279&semt=ais"
            className="card-img-top"
            alt="..."
            style={{ overflow: "hidden" }}
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This isi some text!</p>
            <div className="container w-100">
              <select className="m-2 h-100  bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100  bg-success rounded">
                <option value="half">half</option>
                <option value="full">full</option>
              </select>
              <div className="d-inline fs-5 h-100 ">Final Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
