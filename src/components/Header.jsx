import Button from "./Button";

export default function Header() {
    return (
        <div className="">
            
            <h1 className=" bg bg-Dark">Expense Tracker</h1>
            <small className=" bg bg-Info">
            Start taking control of you finance and life.
                Record categories and analyze your spending
            </small>
            <Button text="search"/>
        </div>
    )
}