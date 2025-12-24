import EmployeesStats from '@/components/shared/employees-stats';
import TeamsStats from '@/components/shared/teams-stats';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DashboardPage() {
  return (
    <Tabs defaultValue='employees'>
      <TabsList className='mb-4'>
        <TabsTrigger value='employees'>Employees stats</TabsTrigger>
        <TabsTrigger value='teams'>Teams stats</TabsTrigger>
      </TabsList>
      <TabsContent value='employees'>
        <EmployeesStats />
      </TabsContent>
      <TabsContent value='teams'>
        <TeamsStats />
      </TabsContent>
    </Tabs>
  );
}
