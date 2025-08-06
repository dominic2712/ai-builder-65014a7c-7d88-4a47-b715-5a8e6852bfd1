export const fetchAIInfo = async (): Promise<any> => {
  const response = await fetch('/api/ai-info');
  if (!response.ok) {
    throw new Error('Failed to fetch AI info');
  }
  return response.json();
};