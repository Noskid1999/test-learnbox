const data = {
  choices: [
    {
      content_filter_results: {
        hate: {
          filtered: false,
          severity: "safe",
        },
        self_harm: {
          filtered: false,
          severity: "safe",
        },
        sexual: {
          filtered: false,
          severity: "safe",
        },
        violence: {
          filtered: false,
          severity: "safe",
        },
      },
      finish_reason: "stop",
      index: 0,
      logprobs: null,
      message: {
        content:
          "Grade: 8\n\nFeedback:\nOverall, your answer provides a good explanation of why the Moon appears to change shape throughout the month. You accurately describe the concept of phases and how they are caused by the Moon's position relative to the Earth and the Sun. Your answer also highlights that the Moon does not actually change shape, but rather, it is the amount of sunlight that we see on it that changes.\n\nTo improve your answer and make it more comprehensive, consider including the following points:\n\n1. Elaborate on the different phases of the Moon: While you mention a full moon and a crescent moon, you can further expand on the other phases such as the first quarter, third quarter, and gibbous phases. This will enhance your explanation and show a deeper understanding of the topic.\n\n2. Address the phenomenon of \"lunar month\": Explain how the Moon's phases repeat in a cycle, known as a lunar month, which lasts approximately 29.5 days. This will provide additional context and show a broader perspective on the topic.\n\n3. Discuss the observation of the Moon during the day: Mention that, although it is commonly associated with nighttime, the Moon can also be seen during the day, depending on its phase and position in the sky. This will add more depth to your explanation and make it more comprehensive.\n\n4. Incorporate visuals or diagrams: Consider including visuals, such as diagrams or illustrations, to help illustrate the concept of the Moon's phases and the change in sunlight that we observe. Visual aids can greatly enhance the clarity and understanding of your answer.\n\nRemember to review your answer, ensuring it is clear, concise, and well-structured. Providing this additional information will give your response a more comprehensive and detailed perspective on the topic.\n\nGreat job overall, and keep up the excellent work!",
        role: "assistant",
      },
    },
  ],
  created: 1726326833,
  id: "chatcmpl-A7Ol7hPZe5v6cKVmR84kLrBSkmsjR",
  model: "gpt-35-turbo",
  object: "chat.completion",
  prompt_filter_results: [
    {
      prompt_index: 0,
      content_filter_results: {
        hate: {
          filtered: false,
          severity: "safe",
        },
        self_harm: {
          filtered: false,
          severity: "safe",
        },
        sexual: {
          filtered: false,
          severity: "safe",
        },
        violence: {
          filtered: false,
          severity: "safe",
        },
      },
    },
  ],
  system_fingerprint: null,
  usage: {
    completion_tokens: 365,
    prompt_tokens: 211,
    total_tokens: 576,
  },
};

const response = data["choices"][0]["message"]["content"];

