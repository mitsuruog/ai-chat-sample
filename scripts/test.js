const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const main = async () => {
  const assistant = await openai.beta.assistants.retrieve(
    "asst_H3jnFZuFBh5R7yGCkcAieGsf"
  );

  const thread = await openai.beta.threads.messages.retrieve(
    "thread_vVsSl8pDsm3eWV63Q4R7RtS2",
    "msg_lnGmZSm82eXXeugVbsRn5aKx"
  );

  console.log(assistant, thread);
};

main();
