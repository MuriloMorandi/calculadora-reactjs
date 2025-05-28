import { Card } from "./ui/Card";
import { Text } from "./ui/Text";

export const OperationHistory = () => {
    return (
        <Card className="py-10 px-8 pt-14">
            <Text
                as="h1"
                variant="heading"
                className="mb-4"
            >
                Historico de Operações
            </Text>
            <ul className="flex flex-col gap-3">
                <Text as='li'>1 + 1 = 2</Text>
                <Text as='li'>1 + 1 = 2</Text>
                <Text as='li'>1 + 1 = 2</Text>
            </ul>
        </Card>
    );
}