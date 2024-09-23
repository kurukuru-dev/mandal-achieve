import ValidationText from '@/components/validationText';

export default function UserValidationText({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute -top-6 left-1">
      <ValidationText className="h-5">{children}</ValidationText>
    </div>
  );
}
