import createTestCafe from "testcafe";

const testcafe = await createTestCafe("localhost", 1337, 1338)

try{
    const runner = testcafe.createRunner();

    const failedCount = await runner
        .src(["index.js"])
        .run();

    console.log('Test failed ' + failedCount);
}finally{
    await testcafe.close()
}
