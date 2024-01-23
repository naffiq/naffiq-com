import * as React from "react";

import Container, { ContainerContent } from "../components/Container";
import DefaultLayout from "../layouts";
import { Paragraph } from "../components/Typography";
import { A } from "../components/Link";

const PernePage = () => (
  <DefaultLayout>
    <Container narrow>
      <ContainerContent>
        <h1>Perne</h1>
        <Paragraph>
          Perne – қазақ тіліне арналған қателерді дұрыстайтын iOS пернетақтасы.
        </Paragraph>
        <Paragraph>
          Сондай қосымшаны жазу идясы бұрыннан пайда болған, бірақ Swift тілді жаңа ғана үйрендім.
          Сол үшін қосымшада қателер болуы мүмкін. Қателер тұралы осы поштаға есеп бере аласыз 
          <A href="mailto:perne@naffiq.com" target="_blank">perne@naffiq.com</A>.
        </Paragraph>
        <Paragraph>
          Қазақша қателерді табсаңыз да жібереберіңдер 😉
        </Paragraph>
        <Paragraph>
          Perne – это клавиатура для iOS, которая помогает печатать без ошибок на казахском языке.
        </Paragraph>
        <Paragraph>
          Идея появилась давно, а вот умение разрабатывать приложения на Swift относительно недавно. 
          Поэтому приложение может иметь некоторые ошибки, о которых вы можете писать на 
          <A href="mailto:perne@naffiq.com" target="_blank">perne@naffiq.com</A>, чем вы мне очень поможете. 
        </Paragraph>
        <Paragraph>
          Так же можете написать об ошибках, которые я мог допустить на казахском 😉
        </Paragraph>
      </ContainerContent>
    </Container>
  </DefaultLayout>
);

export default PernePage;
