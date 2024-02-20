export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Limit! Buy <b>pro</b> for &gt;5{" "}
        </span>
      ) : (
        "fancy Counter"
      )}
    </h1>
  );
}
