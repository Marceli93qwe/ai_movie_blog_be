import {ReviewRecord} from "../records/Review.record";

let testReviewRecord: ReviewRecord = new ReviewRecord(
    "test_id",
    3,
    "test",
    "test",
    299,
    "xddddd",
    "x",
    5.65,
    4,
    "review test"
);

test("new ReviewRecord() test", () => {
//    new ReviewRecord() should not throw
    expect(() => testReviewRecord = new ReviewRecord(
        "test_id",
        3,
        "test",
        "test",
        299,
        "xddddd",
        "x",
        5.65,
        4,
        "review test"
    )).not.toThrow();
    // console.log(testReviewRecord);
});

test("ReviewRecord.insert() tests", async () => {
    //method should not throw
    expect(async () => {
        await testReviewRecord.insert()
    }).not.toThrow();
    // console.log(await testReviewRecord.insert());
})

test(".getAll() tests", async () => {
    //method should not throw
    expect(async () => await ReviewRecord.getAll()).not.toThrow();
    // console.log(await ReviewRecord.getAll());
})
test("getOne() tests", async () => {
    //method should not throw
    expect(async () => {
        await ReviewRecord.getOne("test_id")
    }).not.toThrow();
    // console.log(await ReviewRecord.getOne('test_id'));
})

test("getAllIds() tests", async () => {
    //method should not throw
    expect(async () => {
        await ReviewRecord.getAllIds()
    }).not.toThrow();
    // console.log(await ReviewRecord.getAllIds());
})